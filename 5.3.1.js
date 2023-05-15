
// [Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng


import React from 'react';
const Browser = () => {

  return (
      <div>
        <h1>Hello, world!</h1>
        <h4>Browser's details: {navigator.userAgent}</h4>
      </div>
  );
};
export default Browser;