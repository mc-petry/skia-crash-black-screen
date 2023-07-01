import {
  Box,
  BoxShadow,
  Canvas,
  Group,
  RoundedRect,
  rect,
  rrect,
} from '@shopify/react-native-skia'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function Board() {
  // const font = useNumberFont()
  const [{ i, j }, setPosition] = useState<{ i: number; j: number }>({
    i: 2,
    j: 7,
  })

  useEffect(() => {
    const render = () => {
      setPosition({
        i: getRandomArbitrary(0, 8),
        j: getRandomArbitrary(0, 8),
      })
      setTimeout(render, 0)
    }

    render()
  }, [])

  return (
    <Canvas
      style={{ marginTop: 100, height: HEIGHT }}
      // onTouch={handleTouch}
    >
      <Group transform={[{ translateY: HOFFSET }, { translateX: HOFFSET }]}>
        <Box box={rrect(rect(0, 0, WIDTH, WIDTH), 20, 20)} color="#eee">
          <BoxShadow dx={0} dy={0} blur={10} color="#768083" />
        </Box>
        <RoundedRect
          x={i * 50}
          y={j * 50}
          width={50}
          height={50}
          r={25}
          color="#fff"
        />
      </Group>
    </Canvas>
  )
}

const VERTICAL_PADDING = 100
const HOFFSET = 10
const WIDTH = Dimensions.get('window').width - HOFFSET * 2
const HEIGHT = WIDTH + VERTICAL_PADDING * 2
