import { DateRange, Range, RangeKeyDict } from 'react-date-range';

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker = ({ value, onChange, disabledDates }: DatePickerProps) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      classNames={{
        calendarWrapper: 'text-[16px] w-full',
        dayToday: 'text-neutral-800',
      }}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default DatePicker;
