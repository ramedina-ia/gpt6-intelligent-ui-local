export interface UIComponentSpec {
  component: 'UICard' | 'UIMetric' | 'UISlider' | 'UIButton';
  props: Record<string, any>;
}

/**
 * Parser Incremental Resiliente para Streaming de Tokens JSON.
 * Cierra automáticamente llaves y corchetes incompletos mientras el LLM emite el bloque ```ui.
 */
export function parseStreamingUISpec(rawString: string): UIComponentSpec[] | null {
  if (!rawString) return null;
  const cleaned = rawString.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

  let candidate = '';
  const fenceMatch = cleaned.match(/```(?:ui|json)?\s*([\s\S]*?)(?:```|$)/i);
  if (fenceMatch && fenceMatch[1]) {
    candidate = fenceMatch[1].trim();
  } else {
    const firstBracket = cleaned.indexOf('[');
    if (firstBracket !== -1) {
      candidate = cleaned.slice(firstBracket).trim();
    }
  }

  if (!candidate) return null;

  let parsedSpecs: any = null;
  try {
    parsedSpecs = JSON.parse(candidate);
  } catch {
    try {
      let fixed = candidate;
      const lastCloseBrace = fixed.lastIndexOf('}');
      if (lastCloseBrace !== -1) {
        fixed = fixed.slice(0, lastCloseBrace + 1);
      }
      fixed = fixed.replace(/,\s*$/, '');
      const openB = (fixed.match(/\{/g) || []).length;
      const closeB = (fixed.match(/\}/g) || []).length;
      const openA = (fixed.match(/\[/g) || []).length;
      const closeA = (fixed.match(/\]/g) || []).length;

      if (openB > closeB) fixed += '}'.repeat(openB - closeB);
      if (openA > closeA) fixed += ']'.repeat(openA - closeA);

      parsedSpecs = JSON.parse(fixed);
    } catch {
      return null;
    }
  }

  if (parsedSpecs && !Array.isArray(parsedSpecs) && typeof parsedSpecs === 'object') {
    if (Array.isArray(parsedSpecs.components)) parsedSpecs = parsedSpecs.components;
    else if (Array.isArray(parsedSpecs.ui)) parsedSpecs = parsedSpecs.ui;
    else if (parsedSpecs.component) parsedSpecs = [parsedSpecs];
  }

  return Array.isArray(parsedSpecs) && parsedSpecs.length > 0 ? parsedSpecs : null;
}
