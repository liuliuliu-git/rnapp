import { ScrollView, RefreshControl, StyleSheet } from 'react-native'

import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import Slides from '@/components/(tabs)/index/Slides'
import CoursesList from '@/components/(tabs)/index/CoursesList'

export default function Index() {
  const url = '/'
  const { data, loading, error, refreshing, onReload, onRefresh } = useFetchData(url)
  const { recommendedCourses, likesCourses, introductoryCourses } = data

  /**
   * 根据数据加载状态，渲染不同的内容
   */
  const renderContent = () => {
    // 加载中
    if (loading) {
      return <Loading />
    }

    // 网络错误
    if (error) {
      return <NetworkError onReload={onReload} />
    }

    return (
      <>
        {/* 推荐的课程 */}
        <Slides courses={recommendedCourses} />
        <CoursesList courses={likesCourses} title="人气视频课程" />
        <CoursesList courses={introductoryCourses} title="入门视频课程" />
      </>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#1f99b0'}
        />
      }
    >
      {renderContent()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    minHeight: '76%',
  },
})
