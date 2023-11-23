import * as Slider from '@radix-ui/react-slider'

interface Props {
  onChangeRange: (value: number[]) => void
  booksPages: { min: number, max: number }
}
export function RangeInput ({ onChangeRange, booksPages }: Props) {
  // const { min, max } = booksPages

  return <form >
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5 mb-8"
      defaultValue={[100, 1000]}
      max={booksPages?.max}
      min={booksPages?.min}
      step={10}
      onValueChange={(value) => { onChangeRange(value) }}
    >
      <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-emerald-200 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-slate-400 rounded-[10px] hover:bg-emerald-100 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-orange-200"
        aria-label="Volume"
      />
      <Slider.Thumb
        className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-slate-400 rounded-[10px] hover:bg-emerald-100 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-orange-200"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>
}
