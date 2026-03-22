import PressableHaptic from '@src/components/pressable-haptics'
import { useLocation } from '@src/contexts/location'
import { useRouter } from 'expo-router'
import { ChevronDown } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from "./styles"

const MainHeaderWrapper = () => {
    const { push } = useRouter();
    const { location, selectedAddress } = useLocation()

    return (
        <View style={styles.container} >
            <PressableHaptic
                style={({ pressed }) => [
                    { opacity: pressed ? 0.6 : 1 }
                ]}
                onPress={() => push('/delivery-location')}
            >
                <View>
                    <Text style={[styles.header, styles.color]}>Quicko in</Text>

                    {/* will be based on location */}
                    <Text style={[styles.color, styles.timeText]}>{10} minutes</Text>

                    <View style={styles.locationButton}>
                        <Text style={[styles.color, styles.name_of_location]}>
                            HOME -
                        </Text>

                        <View style={styles.current_location}>
                            <Text style={[styles.color]}> {selectedAddress?.[0]?.name ?? location?.coords.longitude}</Text>
                            <ChevronDown color="white" size={15} />
                        </View>
                    </View>
                </View>
            </PressableHaptic >

            {/* <View style={styles.rightSection} >
                {
                    RIGHT_SECTION_DATA.map((el, idx) => (
                        <CirculatButton {...el} key={`${el} + ${idx}`} />
                    ))
                }
            </View > */}
        </View >
    )
}

export default MainHeaderWrapper
