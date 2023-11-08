<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3846480148e353183a41250fee1fedc342c62d7a
import React from 'react'
import SearchResultItem from './SearchResultItem'

const ResultList = ({ result }) => {
  return (
    <div>
      {result && <>
        <p className='font-bold text-xl whitespace-nowrap'>{result?.location}: {result?.totalItems} <span>chỗ nghỉ</span></p>
        <div className='w-full h-fit'>
          {result?.data?.map((item, index) => (
            <SearchResultItem key={index} item={item} />
          ))}
        </div>
      </>}

    </div>
  )
}

ResultList.defaultProps = {
  result: {
    totalItems: 0,
    location: '',
    data: []
  }
}

<<<<<<< HEAD
export default ResultList
>>>>>>> e15826128844c8e8a0f3541dfeaddf95d55a20aa
=======
export default ResultList
>>>>>>> 3846480148e353183a41250fee1fedc342c62d7a
