import { useEffect, useState } from "react";




export const useContentWritter = ({contents}: {contents: string[]}) => {

  enum TASK {
    TYPE,
    PAUSE,
    DELETE
  }

  const [text, setText] = useState<string>('');
  const [task, setTask] = useState<TASK>(TASK.TYPE);
  const [contentSelected, selectContent] = useState<number>(0);

  const TYPE_INTERVAL = 200
  const PAUSE_INTERVAL = 300
  const DELETE_INTERVAL = 100
  const RANDOMIZE_FACTOR = 0.5

  const getInterval = (baseInterval: number, randomizeFactor: number) => {
    const minVal = baseInterval * (1 - randomizeFactor);
    const maxVal = baseInterval * (1 + randomizeFactor);
    const interval = minVal + Math.floor(Math.random() * (maxVal - minVal))
    
    return interval;
  }

  useEffect(() => {
    
    const selectNextContent = () => {
      if (contentSelected === contents.length - 1) {
        selectContent(0);
        return;
      }
      selectContent(contentSelected + 1)
    }

    switch (task) {
      case TASK.PAUSE:
        const pauseTimeout = setTimeout(() => {
          if (text === '') {
            setTask(TASK.TYPE)
            selectNextContent()
          }
          else setTask(TASK.DELETE)
        }, getInterval(PAUSE_INTERVAL, RANDOMIZE_FACTOR))

        return () => clearTimeout(pauseTimeout)
      case TASK.TYPE:
        const nextText = contents[contentSelected].slice(0, text.length + 1);
        if (nextText === text) {
          setTask(TASK.PAUSE)
          return;
        }
        const writtingTimeout = setTimeout(() => {
          setText(nextText);
        }, getInterval(TYPE_INTERVAL, RANDOMIZE_FACTOR))
      
        return () => clearTimeout(writtingTimeout);
      case TASK.DELETE:

        if (text === ""){
          setTask(TASK.PAUSE);
          return;
        }
    
        const deletingTimeout = setTimeout(() => {
          setText(text.slice(0, text.length - 1))
        }, getInterval(DELETE_INTERVAL, RANDOMIZE_FACTOR))
        return () => clearInterval(deletingTimeout);
    }

  }, [text, contents, task, TASK, contentSelected])

  return text
}
