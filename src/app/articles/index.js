import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'expo-image'

import useFetchData from '@/hooks/useFetchData'
import Loading from '@/components/shared/Loading'
import NetworkError from '@/components/shared/NetworkError'
import NoData from '@/components/shared/NoData'

export default function Index() {
  const url = '/articles'
  const { data, setData, loading, refreshing, onRefresh, error, onReload } = useFetchData(url)
  const { articles } = data

  // 加载中
  if (loading) {
    return <Loading />
  }

  // 网络错误
  if (error) {
    return <NetworkError onReload={onReload} />
  }

  /**
   * 分隔线
   */
  const renderSeparator = () => <View style={styles.separator}></View>

  /**
   * 通知列表
   * @param item
   */
  const renderItem = ({ item }) => {
    const logo = require('@/assets/list-light.png')

    return (
      <Link asChild href={{ pathname: '/articles/[id]', params: { id: item.id } }}>
        <TouchableWithoutFeedback>
          <View style={styles.item}>
            <Image source={logo} style={styles.image} />

            <View style={styles.titleWrapper}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.createdAt}>{item.createdAt}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Link>
    )
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={articles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={<NoData />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#1f99b0'}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  item: {
    padding: 5,
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  image: {
    alignSelf: 'center',
    height: 70,
    width: 70,
  },
  titleWrapper: {
    flex: 1,
    paddingRight: 8,
    backgroundColor: 'transparent',
  },
  title: {
    marginTop: 18,
    fontSize: 12,
    fontWeight: '300',
    height: 40,
    lineHeight: 18,
    color: '#333',
  },
  createdAt: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '300',
    color: '555',
  },
  separator: {
    marginLeft: 15,
    marginRight: 0,
    height: 1.2,
    backgroundColor: '#E7DFD3',
  },
})
