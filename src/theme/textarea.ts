import type { TextareaDesignTokens } from '@primeuix/themes/types/textarea'

export const textareaTheme: TextareaDesignTokens = {
  root: {
    color: '{text.color}',
    background: 'var(--p-background-color)',
    borderColor: 'var(--p-background-color)',
    hoverBorderColor: '{primary.500}',
    focusBorderColor: '{primary.600}',
  },
}
