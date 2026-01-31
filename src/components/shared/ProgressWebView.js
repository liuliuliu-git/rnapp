import { useState } from 'react'  
import { View, StyleSheet } from 'react-native'  
import { WebView } from 'react-native-webview'  

import Loading from '@/components/shared/Loading'  

/**  
 * 进度条  
 * @param props  
 */  
const ProgressBar = (props) => {  
  const width = `${props.progress * 100}%`  

  return <View style={[styles.loadingBar, { width }]} />  
}  

/**  
 * 带加载中和进度条的 WebView  
 * @param props  
 */  
export default function ProgressWebView(props) {  
  const [progress, setProgress] = useState(0)  

  return (  
    <View style={styles.container}>  
      <ProgressBar progress={progress} />  

      <WebView  
        startInLoadingState={true}  
        renderLoading={() => <Loading />}  
        // 加载进度，值为 0...1 之间（含有小数）  
        onLoadProgress={({ nativeEvent }) => {  
          setProgress(nativeEvent.progress)  
        }}  
        {...props}  
      />  
    </View>  
  )  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#fff',  
  },  
  loadingBar: {  
    backgroundColor: '#1f99b0',  
    height: 2,  
  },  
})
