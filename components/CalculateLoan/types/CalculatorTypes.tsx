export type RowCalculator = {
    id: string
    title: string
    min: number
    max: number
    labels: {
      min: string
      max: string
    }
    step: number
    defaultValue: number
    description?: string;
    hideSlider?: boolean | undefined;
    valueFormatter?: (value: number) => string | undefined
    onChange?: (value: number) => void
}