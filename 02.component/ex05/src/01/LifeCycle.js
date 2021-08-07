import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super(...arguments);
        this.h3Ref = null;
        this.state = {
            color: null
        }
        console.log('[Mount01] constructor')
    }

    /**
     * props로 받아온 값을 state에 동기화 한다.[react V16.3]
     */

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(`[Mount02][UPDATE01]: getDerivedStateFromProps(nextProps=${nextProps.color}, prevState=${prevState.color} )`)
        return nextProps.color !== prevState.color ? {color: nextProps.color} : null;
    }

    /**
     * state이 변경 되었을 때, 렌더링 여부를 결정한다.
     * 현재 데이터: this.props, this.state
     * 변경될 데이터: nextProps, nextState
     * 로 접근이 가능하다.
     * true 면 render로 가고 false면 안감
     * 
     * 컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
     */
    shouldComponentUpdate(nextProps, nextState){
        console.log(`[UPDATE02]: shouldComponentUpdate( nextProps = ${nextProps.color}, nextState = ${nextState.color})`)
        return true; 
    }

    render(){
        console.log(`[Mount03][UPDATE03]: render`)
        return(
            <h3 
                style={ { 
                    width:300, 
                    height:50, 
                    backgroundColor: this.state.color 
                } }
                ref={ ref => this.h3Ref = ref }
            />
        )
    }

    /**
     * render 메소드 호출 직후, DOM에 변화를 반영하기 직전에 호출[v16.3]
     * 반환 값은 다음 메소드 componentDidUpdate()의 세번째 파라미터로(snapshot)로 전달.
     * 변경전의 props, state 접근이 가능하다.
     * 주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 오버라이딩을 한다.
     */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`[UPDATE04]: getSnapshotBeforeUpdate(prevProps=${prevProps.color}, prevState=${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }

    //사용자가 변화된 UI를 확인
    /**
     * DOM업데이트가 끝난 직 후, DOM 작업이 가능하다.
     * 변경전의 props, state 접근이 가능하다.
     */
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
        snapshot = snapshot.substr(4, snapshot.length-5).split(', ').reduce((acc, cur, i) => acc + parseInt(cur).toString(16), '#');
        console.log(`[UPDATE05]: componentDidUpdate(prevProps=${prevProps.color}, prevState=${prevState.color}, snapshot=${snapshot})`)
    }

    /**
     * 컴포넌트 생성을 마치고 첫 렌더링 작업이 끝난 후!
     * 다른 자바스크립트 라이브러리 또는 프레임워크 함수 호출 또는
     * 1. 이벤트 등록
     * 2. 타이머 설정
     * 3. 네트워크 통신
     * 등을 할 수 있다.
     */

    componentDidMount(){
        console.log(`[Mount04]: componentDidMount`)
    }

    /**
     * 컴포넌트를 DOM에서 제거 할 때
     * componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM엘리먼트 등을 제거(Clean- up) 작업을 한다.
     */

    componentWillmount(){
        console.log(`[UnMount]: componentWillMount`)
    }
}