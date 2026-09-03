import { View, StyleSheet} from 'react-native'
import React, { FC } from 'react'
import { TypeNavigate } from './menu.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { menuItems } from './menu.data'
import MenuItem from './MenuItem'

interface IBottomMenu {
     nav: TypeNavigate
     currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = props => {
  const { bottom } = useSafeAreaInsets()
  return (
 <View
   className="pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbbbb] bg-white"
   style={[
    styles.container,
    {
      paddingBottom: bottom + 20,
    },
  ]}
>
      {menuItems.map(item => (
        <MenuItem  key={item.path} item={item} {...props}/>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',

    borderTopWidth: 1,
    borderTopColor: '#bbbbbb',

    backgroundColor: '#ffffff',
  },
});

export default BottomMenu