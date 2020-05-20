import React, { useState } from 'react';
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Button, Card, Icon, Text, useTheme } from '@ui-kitten/components';

const SpiritItem = ({ spiritItem, onSelect }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.spiritContainer}>
        <Text category='s1'>{spiritItem.label}</Text>
        <Icon
          name={
            spiritItem.isSelected
              ? 'checkmark-square-2-outline'
              : 'square-outline'
          }
          fill={theme['color-primary-default']}
          style={{ width: 25, height: 25 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const SpiritSelector = ({ spirits, dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [previousState, setPreviousState] = useState(spirits);

  const handleCancel = () => {
    dispatch({ type: 'set_previous', payload: previousState });
    setPreviousState(spirits);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setModalVisible(true)}>Select Spirits</Button>
      <Modal
        animationType='fade'
        visible={modalVisible}
        presentationStyle='overFullScreen'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback
          style={styles.modalBackdrop}
          onPress={handleCancel}
        >
          <View style={styles.modalContainer}>
            <Card disabled={true} style={styles.card}>
              <View>
                <Button
                  appearance='ghost'
                  onPress={() => dispatch({ type: 'select_all' })}
                >
                  Select All
                </Button>
              </View>

              <View>
                <FlatList
                  data={spirits}
                  renderItem={({ item }) => (
                    <SpiritItem
                      spiritItem={item}
                      onSelect={() =>
                        dispatch({ type: 'toggle_spirit', payload: item.id })
                      }
                      keyExtractor={item => item.id}
                    />
                  )}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  style={styles.modalButtons}
                  onPress={() => setModalVisible(false)}
                >
                  Set Spirits
                </Button>
              </View>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalBackdrop: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  card: {
    paddingBottom: 15,
  },
  spiritContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    width: 300,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default SpiritSelector;
