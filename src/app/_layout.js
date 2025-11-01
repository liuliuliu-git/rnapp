import { Stack } from 'expo-router'
import tabOptions from '@/options/tabOptions'
import screenOptions from '@/options/screenOptions'
import ModalCloseButton from '@/components/shared/ModalCloseButton'
/**
 * 全局布局配置
 */
export default function Layout() {
  return (
    <Stack
      screenOptions={screenOptions}
    >
      {/* Tabs */}
      <Stack.Screen name="(tabs)" options={tabOptions} />

      {/* Cards */}
      <Stack.Screen name="articles/index" options={{ title: '通知' }} />
      <Stack.Screen name="settings/index" options={{ title: '设置' }} />
      <Stack.Screen name="courses/[id]" options={{ title: '课程详情' }} />
      <Stack.Screen name="search/index" options={{ title: '搜索' }} />

      {/* Modal */}
      <Stack.Screen
        name="teachers/[id]"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom', // 从底部滑入
          title: '老师详情',
          headerLeft: () => <ModalCloseButton />,
        }}
      />
    </Stack>
  )
}
