import {timeStamp} from 'console';
import {useState} from 'react';

const useCommentHook = initialComment => {
  const [comments, setComments] = useState(initialComment);

  const insertNode = (tree, commentId, content) => {
    return tree.map(commentItem => {
      if (commentItem.id === commentId) {
        return {
          ...commentItem,
          replies: [...commentItem.replies, content],
        };
      } else if (commentItem.replies && commentItem.replies.length > 0) {
        return {
          ...commentItem,
          replies: insertNode(commentItem.replies, commentId, content),
        };
      }
    });
  };

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      value: 0,
      timeStamps: new Date().toISOString(),
      replies: [],
    };

    if (commentId) {
      setComments(prevCom => insertNode(prevCom, commentId, newComment));
    } else {
      setComments(prevCom => [newComment, ...prevCom]);
    }
  };
   


  const deleteNode = (tree, nodeID)=>{
   return tree.reduce((acc, node)=>{
    if(node.id===nodeID){
        return acc
    }else if(node.replies &&node.replies.length>0){
        node.replies = deleteNode(node.replies , nodeID)

    }
    return [...acc, node]
   },[])
  } 

  const deleteComment = (a)=>{
    setComments((prevCom)=> deleteNode(prevCom, commentId))
  }

  return {
    insertComment, insertNode
  }
};
