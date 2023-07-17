import { useCallback } from 'react';

import Button from '../ui/Button';
import { ModalCloseBtn, OverlayScreen } from '../ui/ClientButtons';

interface ModelProps {
  isOpen?: boolean;
  title: string;
  children?: React.ReactElement;
  body?: string;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  onSubmit: () => void;
}

const Modal = ({
  onSubmit,
  title,
  isOpen,
  footer,
  actionLabel,
  children,
  disabled,
}: ModelProps) => {
  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-neutral-100 bg-opacity-60">
      <OverlayScreen />

      <div className="relative w-full my-6 mx-auto lg:max-w-3xl h-full xl:w-2/6 lg:w-3/6 md:w-4/6 md:h-auto">
        <div className="h-full rounded-lg shadow-lg relative flex flex-col w-full bg-white md:h-auto p-10">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">{title}</h3>

            <ModalCloseBtn />
          </div>

          <div className="relative py-10 flex-auto">{children}</div>

          <div className="flex flex-col gap-2 py-5">
            <Button label="Sign In" fullWidth disabled={disabled} />
            {/* <Button
              label="Sign up Now"
              onClick={openModal}
              fullWidth={false}
              disabled={false}
            /> */}
          </div>

          {footer}
        </div>
      </div>
    </div>
  );
};
export default Modal;
