import React from 'react';
import { StyleSheet, View } from 'react-native';

import Label from '_/components/base/Label';

const Second: React.FC = () => {
  return (
    <View style={styles.container}>
      <Label>Optimus Prime. Second page</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Second;
