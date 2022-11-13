import { useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import { Button } from '~/components/shared/Form';
import { createRental } from '~/services/useCases/rentals/create-rental';

type CreateRentalModalProps = {
  onClose: () => void;
  carId: string;
};

export function CreateRentalModal({ onClose, carId }: CreateRentalModalProps) {
  const now = useRef(new Date());

  const [rentalDate, setRentalDate] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  const [isCreatingRental, setIsCreatingRental] = useState(false);

  // const expectedReturnDate = format(rentalDate[0]?.endDate, 'yyyy-MM-dd\'T\'HH:mm:ssXX');
  const endDate = rentalDate[0]?.endDate;
  const expectedReturnDate =
    endDate && format(endDate, 'yyyy-MM-dd') + 'T19:42:06.042Z';

  async function createUserRental() {
    setIsCreatingRental(true);
    try {
      const body = {
        expectedReturnDate,
        carId,
      };
      const response = await createRental(body);
      console.log('success?', response);
    } catch (err) {
      console.log('err', err);
    } finally {
      setIsCreatingRental(false);
    }
  }

  console.log(rentalDate);
  console.log(expectedReturnDate);

  return (
    <div
      id="shipping-modal"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto md:max-w-3xl">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
            data-modal-toggle="shipping-modal"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Criar novo aluguel
            </h3>
            <p className="text-stone-600">
              Escolha uma data para o seu aluguel!
            </p>
            <form className="space-y-6 mt-12" action="#">
              <div className="w-full items-center flex justify-center">
                {/* <Input label="Selecione uma data para retorno" id="expectedReturnDate" /> */}
                <DateRange
                  dateDisplayFormat="dd/MM/yyyy"
                  minDate={now.current}
                  // ranges={ranges}
                  editableDateInputs={true}
                  onChange={(item) => {
                    // console.log(item);
                    setRentalDate([item?.selection]);
                  }}
                  ranges={rentalDate}
                  moveRangeOnFirstSelection={false}
                  rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
                />
              </div>

              <div className="w-full mt-12 flex items-center justify-end">
                <div className="w-[50%] flex items-center gap-4">
                  <Button variant="secondary" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    loading={isCreatingRental}
                    onClick={createUserRental}
                    loadingMessage="Finalizando..."
                  >
                    Finalizar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
