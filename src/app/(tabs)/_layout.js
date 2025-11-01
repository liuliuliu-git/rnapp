import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'
import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

/**
 * TabBar 图标组件
 * @param props
 */
function TabBarIcon(props) {
  return <SimpleLineIcons size={25} {...props} />
}

export default function TabLayout() {
  // iOS 使用原生液态玻璃 Tabs
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs tintColor="#1f99b0" disableTransparentOnScrollEdge>
        <NativeTabs.Trigger name="index">
          <Label>发现</Label>
          <Icon sf={{ default: 'play.house', selected: 'play.house.fill' }} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="videos">
          <Icon sf={{ default: 'video', selected: 'video.fill' }} />
          <Label>视频课程</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="users">
          <Icon sf={{ default: 'person', selected: 'person.fill' }} />
          <Label>我的</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    )
  }

  // Android 使用传统 JavaScript Tabs
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#1f99b0' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '发现',
          tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: '视频课程',
          tabBarIcon: ({ color }) => <TabBarIcon name="camrecorder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}
