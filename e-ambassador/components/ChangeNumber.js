import React from 'react';
import { View, Button } from 'react-native';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';

const SheetContent = () => {
  const { dismiss, dismissAll } = useBottomSheetModal();

  return (
    <View>
      <Button onPress={dismiss} />
    </View>
  )
}
export default SheetContent;