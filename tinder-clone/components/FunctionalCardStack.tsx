import React, { useState } from 'react'
import { Animated, Platform, Text, View } from 'react-native'
import { DemoProfile } from '../assets/data/demo';
import CardItem from './CardItem';
import { Card } from './FunctionalCard';

type CardStackPropTypes = {
  data: DemoProfile[],
  style: {} | [] | number,
  cardContainerStyle: number | Object | [],
  secondCardZoom: number,
  loop: boolean,
  initialIndex: number,
  renderNoMoreCards: Function | any,
  onSwipeStart: Function,
  onSwipeEnd: Function,
  onSwipedLeft: Function,
  onSwipedRight: Function,
  onSwipedTop: Function,
  onSwipedBottom: Function,
  onSwiped: Function,
  onSwipedAll: Function,
  onSwipe: Function,
  disableBottomSwipe: boolean,
  disableLeftSwipe: boolean,
  disableRightSwipe: boolean,
  disableTopSwipe: boolean,
  verticalSwipe: boolean,
  horizontalSwipe: boolean,
  verticalThreshold: number,
  horizontalThreshold: number,
  outputRotationRange: string[],
  duration: number,
}


function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

const defaultProps: CardStackPropTypes = {
  style: {},
  cardContainerStyle: {},
  secondCardZoom: 0.95,
  loop: false,
  initialIndex: 0,
  renderNoMoreCards: () => { return (<Text>No More Cards</Text>) },
  onSwipeStart: () => null,
  onSwipeEnd: () => null,
  onSwiped: () => { },
  onSwipedLeft: () => { },
  onSwipedRight: () => { },
  onSwipedTop: () => { },
  onSwipedBottom: () => { },
  onSwipedAll: async () => { },
  onSwipe: () => { },

  disableBottomSwipe: false,
  disableLeftSwipe: false,
  disableRightSwipe: false,
  disableTopSwipe: false,
  verticalSwipe: true,
  verticalThreshold: 200,
  horizontalSwipe: true,
  horizontalThreshold: 150,
  outputRotationRange: ['-15deg', '0deg', '15deg'],
  duration: 300,
  data: []
}

type CardStackState = {
  drag: Animated.ValueXY,
  dragDistance: Animated.Value,
  sindex: 0, // index to the next card to be renderd mod card.length
  cards: string[],
  touchStart: number,
}

// todo separately the loopd stack maybe
function FunctionalCardStack(props: CardStackPropTypes) {

  const initialState: CardStackState = {
    drag: new Animated.ValueXY({ x: 0, y: 0 }),
    dragDistance: new Animated.Value(0),
    sindex: 0,
    cards: [],
    touchStart: 0
  };
  const [state, setState] = useState<CardStackState>(initialState);

  const { secondCardZoom, renderNoMoreCards } = props;

  const scale = state.dragDistance.interpolate({
    inputRange: [0, 10, 220],
    outputRange: [secondCardZoom, secondCardZoom, 1],
    extrapolate: 'clamp',
  });
  const rotate = drag.x.interpolate({
    inputRange: [width * -1.5, 0, width * 1.5],
    outputRange: props.outputRotationRange,
    extrapolate: 'clamp',
  });
  return (

    <View {...this._panResponder.panHandlers} style={[{ position: 'relative' }, this.props.style]}>

      {props.renderNoMoreCards()}

      {props.data.map((item: DemoProfile, index: number) => {
        <Animated.View
          pointerEvents={topCard === topCardName ? 'auto' : 'none'}
          style={[{
            position: 'absolute',
            zIndex: (topCard === 'cardB') ? 3 : 2,
            ...Platform.select({
              android: {
                elevation: (topCard === 'cardB') ? 3 : 2,
              }
            }),
            transform: [
              { rotate: (topCard === 'cardB') ? rotate : '0deg' },
              { translateX: (topCard === 'cardB') ? drag.x : 0 },
              { translateY: (topCard === 'cardB') ? drag.y : 0 },
              { scale: (topCard === 'cardB') ? 1 : scale },
            ]
          }, this.props.cardContainerStyle]}
        >
          <Card key={index}>
            <CardItem
              image={item.image}
              name={item.name}
              description={item.description}
              matches={item.match}
              actions
              onPressLeft={() => this.swiper.swipeLeft()}
              onPressRight={() => this.swiper.swipeRight()} status={''} variant={false} />
          </Card>
        </Animated.View>
      })}
    </View >
  )
}

export default FunctionalCardStack