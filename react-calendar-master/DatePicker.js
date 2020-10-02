import 'moment/locale/it.js';
import { DatePicker, DatePickerInput } from 'rc-datepicker';

const date = '2015-06-26' // or Date or Moment.js

onChange = (jsDate, dateString) => {
  // ...
}

React.renderComponent(
  <div>
    // this renders the full component (input and datepicker)
    <DatePickerInput
      onChange={onChange}
      value={date}
      className='my-custom-datepicker-component'
      {...anyReactInputProps}
    />

    // this renders only a fixed datepicker
    <DatePicker onChange={onChange} value={date} />
  </div>,
  document.body
);
