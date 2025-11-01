import { Tabs, Link } from 'expo-router'
import { Image } from 'expo-image'
import { SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
  return (
    <Image
      style={style.logo}
      contentFit="contain"
      source={require('@/assets/logo-light.png')}
    />
  )
}

/**
 * 导航栏按钮组件
 * @param props
 */
function HeaderButton(props) {
  const { name, ...rest } = props

  return (
    <Link asChild {...rest}>
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#1f99b0" name={name} />
      </TouchableOpacity>
    </Link>
  )
}

/**
 * TabBar 图标组件
 * @param props
 */
function TabBarIcon(props) {
  return <SimpleLineIcons size={25} {...props} />
}



export default function TabLayout() {
  return (
    <NativeTabs tintColor="#1f99b0" disableTransparentOnScrollEdge>
      <NativeTabs.Trigger name="index">
        <Label>发现</Label>
        <Icon sf={{ default: 'play.house', selected: 'play.house.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="videos">
        <Label>视频课程</Label>
        <Icon sf={{ default: 'video', selected: 'video.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="users">
        <Label>我的</Label>
        <Icon sf={{ default: 'person', selected: 'person.fill' }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  )

  // return (
  //   <Tabs
  //     screenOptions={{
  //       headerTitleAlign: 'center', // 安卓标题栏居中
  //       headerTitle: (props) => <LogoTitle {...props} />,
  //       headerLeft: () => <HeaderButton name="bell" href="/articles" style={style.headerLeft} />,
  //       headerRight: () => (
  //         <>
  //           <HeaderButton name="magnifier" href="/search" style={style.headerRight} />
  //           <HeaderButton name="options" href="/settings" style={style.headerRight} />
  //         </>
  //       ),
  //       tabBarActiveTintColor: '#1f99b0', // 设置 TabBar 选中项的颜色
  //       // Android 取消水波纹效果
  //       tabBarButton: (props) => (
  //         <TouchableOpacity
  //           {...props}
  //           activeOpacity={1}
  //           style={[props.style, { backgroundColor: 'transparent' }]}
  //         />
  //       ),
  //     }}
  //   >
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: '发现',
  //         tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} />,
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="videos"
  //       options={{
  //         title: '视频课程',
  //         tabBarIcon: ({ color }) => <TabBarIcon name="camrecorder" color={color} />,
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="users"
  //       options={{
  //         title: '我的',
  //         tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
  //       }}
  //     />
  //   </Tabs>
  // )
}

const style = StyleSheet.create({
  logo: {
    width: 130,
    height: 30,
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
})
