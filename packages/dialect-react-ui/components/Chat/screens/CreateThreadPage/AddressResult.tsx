import type { AccountAddress } from '@dialectlabs/react-sdk';
import clsx from 'clsx';
import { P } from '../../../common/preflighted';
import { useTheme } from '../../../common/providers/DialectThemeProvider';

interface AddressResultProps {
  address?: AccountAddress | null;
  isYou?: boolean;
}

const AddressResult = ({ address }: AddressResultProps) => {
  const { textStyles } = useTheme();

  if (!address) {
    return (
      <P className={clsx(textStyles.small, 'dt-text-red-500 dt-mt-1 dt-px-2')}>
        Invalid address
      </P>
    );
  }

  return (
    <P className={clsx(textStyles.small, 'dt-text-green-500 dt-mt-1 dt-px-2')}>
      Valid address
    </P>
  );
};

export default AddressResult;
