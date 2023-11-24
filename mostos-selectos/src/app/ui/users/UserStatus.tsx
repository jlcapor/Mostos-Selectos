import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
export default function UserStatus({ status }: { status: string }) {
    return (
        <span
          className={clsx(
            'inline-flex items-center rounded-full px-2 py-1 text-sm',
            {
              'bg-green-500 text-gray-100': status === 'ACTIVO',
              'bg-red-400 text-white': status === 'INACTIVO',
            },
          )}
          >
          {status === 'INACTIVO' ? (
            <>
              Inactivo
              <ClockIcon className="ml-1 w-4 text-gray-500" />
            </>
          ) : null}
          {status === 'ACTIVO' ? (
            <>
              Activo
              <CheckIcon className="ml-1 w-4 text-white" />
            </>
          ) : null}
        </span>
      );
    }

    