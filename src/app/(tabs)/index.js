import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import Slides from '@/components/(tabs)/index/Slides'
import CoursesList from '@/components/(tabs)/index/CoursesList'
export default function Index() {
  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  const { recommendedCourses, likesCourses, introductoryCourses } = data

  // 加载中
  if (loading) {
    return <Loading />
  }

  // 网络错误
  if (error) {
    return <NetworkError onReload={onReload} />
  }



  return (
    <ScrollView style={styles.container}>
      <Slides courses={recommendedCourses} />
      <CoursesList courses={likesCourses} title="热门课程" />
      <CoursesList courses={introductoryCourses} title="入门课程" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

})
