import React from "react"
import { useTranslation } from "react-i18next"
import {
  Platform,
  PlatformColor,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from "react-native"

import { ScrollList } from "../../components"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StackNavigationProp } from "@react-navigation/stack"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Podcast } from "../../components/ScrollList/ScrollList"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CompositeNavigationProp } from "@react-navigation/native"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppStackParamList } from "../../navigation/app.navigator"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TabStackParamList } from "../../navigation/tabs.navigator"

const upNextItems: Podcast[] = [
  {
    id: 1,
    title: "Brooklyn 99: The Podcast",
    notes: "This is the podcast",
    date: new Date().toISOString()
  }
]

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "ListenNow">,
  StackNavigationProp<AppStackParamList>
>

type Props = {
  navigation: ProfileScreenNavigationProp
}

const ListenNowScreen = ({ navigation }: Props) => {
  const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable onPress={() => navigation.navigate("Introduction")}>
          <Text style={styles.text}>Open Onboarding</Text>
        </Pressable>
        <ScrollList
          heading={t("Up Next")}
          onPress={() => console.log("Up Next")}
          size="large"
          items={upNextItems}
        />
        <ScrollList
          heading={t("Latest Episodes")}
          onPress={() => console.log("Latest Episodes")}
          rows={3}
          items={[]}
        />
        <ScrollList
          heading={t("Recently Played")}
          subheading={t("Episodes you have listened to")}
          onPress={() => console.log("Recently Played")}
          items={[]}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListenNowScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor("systemBackground")
      },
      android: {
        backgroundColor: PlatformColor("@android:color/background_dark")
      }
    })
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    ...Platform.select({
      ios: {
        color: PlatformColor("label")
      },
      android: { color: PlatformColor("@android:color/primary_text_dark") }
    })
  }
})
