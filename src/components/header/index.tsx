import { ChevronDown } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CirculatButton from '../icon-buttons'
import { RIGHT_SECTION_DATA } from './constant'
import { styles } from "./styles"

const MainHeaderWrapper = () => {
    return (
        <View style={styles.container} >
            {/* left section  */}
            <TouchableOpacity
                activeOpacity={0.8}
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
                            <Text style={[styles.color]}>FLOOR 3, 301</Text>
                            <ChevronDown color="white" size={15} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            {/* Right section */}
            <View style={styles.rightSection} >
                {
                    RIGHT_SECTION_DATA.map((el, idx) => (
                        <CirculatButton {...el} key={`${el} + ${idx}`} />
                    ))
                }
            </View >
        </View >
    )
}

export default MainHeaderWrapper
