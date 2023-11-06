import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/themed";

export function MyTabBar(
  { state, descriptors, navigation }: BottomTabBarProps,
) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const primaryLabel = options.tabBarLabel;
        const secondaryLabel = options.title !== undefined
          ? options.title
          : route.name;

        // const label = options.tabBarLabel !== undefined
        //   ? primaryLabel
        //   : secondaryLabel;

        const label = secondaryLabel;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const color = isFocused ? "#673ab7" : "#222";
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={`nav-link-${index}`}
          >
            <Text style={{ color }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
