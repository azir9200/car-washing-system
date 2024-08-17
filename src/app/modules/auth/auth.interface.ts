
export type TLoginUser = {
  email: string;
  password: string;
  
};
// // set '' after saving password
// TLoginUser.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

