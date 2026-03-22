import { Animated } from "react-native"
import { styles } from "../styles"

const HeroSection = () => {
    return (
        <Animated.View
            style={styles.topView}
        >
            {/* {RADIAL_GLOWS.map((glow, index) => (
                <RadialGlow key={index} {...glow} />
            ))}

            <View style={styles.topContent}>

                <Animated.Text style={styles.heroHeadline}>
                    Everything you need,{"\n"}
                    <Text style={styles.heroAccent}>in 10 minutes</Text>
                </Animated.Text>

                {CHIP_ROWS.map((row, rowIdx) => (
                    <View key={rowIdx} style={styles.chipRow}>
                        {row.map((chip, i) => (
                            <FloatingChip
                                key={chip.label}
                                {...chip}
                                delay={300 + rowIdx * 180 + i * 80}
                            />
                        ))}
                    </View>
                ))}

                <MarqueeTicker tickerItem={TICKER_ITEMS} />

            </View> */}
        </Animated.View >
    )
}

export default HeroSection