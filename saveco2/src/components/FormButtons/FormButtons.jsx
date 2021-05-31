import React from 'react';
import './formButtons.css';

export const FormButtons = ({ register, id, text }) => {
  return (
    <>
      <label className="form__buttons--journey-type">
        <input
          {...register('journeyType')}
          type="radio"
          name="journeyType"
          id={id}
          required={true}
          defaultValue={id}
        />
        {
          <button type="button" className="random">
            {text}
          </button>
        }
      </label>
    </>
  );
};

export const journeyTypeButtons = {
  singleJourney: {
    id: 'singleJourney',
    text: 'JEDNORÁZOVĚ',
  },
  regularJourney: {
    id: 'regularJourney',
    text: 'PRAVIDELNĚ',
  },
};

// FormButtons:
// export const FormButtons = ({ children, register, id, text }) => {
//   return (
//     <>
//       <label className="form__buttons--journey-type">
//         <input
//           {...register('journeyType')}
//           type="radio"
//           name="journeyType"
//           id={id}
//           required
//           defaultValue={id}
//         />
//         {
//           children
//           // <button type="button" className="btn--secondary">
//           //   {text}
//           // </button>
//         }
//       </label>
//     </>
//   );
// };

// FormPage:
// {Object.entries(journeyTypeButtons).map(([key, value]) => (
//   <FormButtons
//     id={key}
//     key={value.id}
//     register={register}
//     defaultChecked={userData.id}
//     text={value.text}
//   >
//     <Button variant={'secondary'} type={'button'}>
//       {value.text}
//     </Button>
//   </FormButtons>
