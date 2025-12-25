import HeaderText from "@src/common/header-text";
import { Modalpadding } from "@src/common/styles";
import SavedAddressCard from "@src/components/address-card";
import LocationAction from "@src/components/call-to-actions/location-action";
import { View } from "react-native";
import { useBottomLocation } from "./hooks/use-bottom-location";
import { LocationBottomDrawerStyle as styles } from './styles';

const LocationBottomDrawerScreen = () => {

    const { locationOptions, savedAddresses } = useBottomLocation()
    return (

        <View style={[Modalpadding.default, styles.wrapper]} >
            <View style={[styles.container, { flex: 1 }]} >
                <HeaderText text="Select delivery location" variant="heading-2" />

                {locationOptions.map((option) => {
                    const { title, containerStyle, hideLowerRounded, hideUpperRounded, icon, image, onPress, subtitle } = option
                    return (
                        <LocationAction
                            key={title}
                            icon={icon}
                            title={title}
                            subtitle={subtitle}
                            onPress={onPress}
                            hideLowerRounded={hideLowerRounded}
                            hideUpperRounded={hideUpperRounded}
                            containerStyle={containerStyle}
                        />
                    )
                })}

                <HeaderText text="Your saved addresses" variant="base-1" css={{ marginTop: 15 }} />
                {savedAddresses.map(item => (
                    <SavedAddressCard
                        key={item.id}
                        title={item.title}
                        badgeText={item.badgeText}
                        address={item.address}
                        phoneNumber={item.phoneNumber}
                        onPress={() => console.log('Selected:', item.title)}
                    />
                ))}
            </View>
        </View>
    )
}

export default LocationBottomDrawerScreen;