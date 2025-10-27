import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import useFetchData from '@/hooks/useFetchData'


export default function Index() {
  const url = '/'
  const { data, loading, error, onReload } = useFetchData(url)
  console.log(data)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是首页</Text>

      <Link style={styles.link} href="/courses/1?title=Node.js">
        查看 Node.js 课程
      </Link>

      <Link style={styles.link} href="/teachers/1">
        打开教师页（Modal）
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#e29447',
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: '#1f99b0',
  },
})
