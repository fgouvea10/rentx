import { Button, Input, Select } from "../../../components/shared/Form";

type DeleteAccountModalProps = {
  onClose: () => void;
};

export function NewRentalModal({ onClose }: DeleteAccountModalProps) {
  return (
    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div className="flex justify-between items-start p-4 rounded-t border-b">
          <h3 className="text-xl font-semibold text-gray-900">Novo aluguél</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="defaultModal"
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
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="w-full">
            <Input id="date" label="Data de retorno" placeholder='dd/mm/yyyyy' />
          </div>
          <div className="w-full">
            <Select options={[]} defaultValue="Selecione um carro" />
          </div>
        </div>
        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
          <div className="w-[20%]">
            <Button type="button">Criar</Button>
          </div>
          <div>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
