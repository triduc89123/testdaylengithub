// Destructuring Array
// Giả sử ta có 1 mảng như sau:
const userName = ["Toàn", "Hà", "Huy", "Đức"];
// Nếu muốn lấy các phần tử trong mảng thì ta làm như sau :
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);

//Nhưng nếu ta sử dụng destructuring thì nó sẽ ngắn hơn như sau :

// const [ten,chi,cung,duoc] = userName;
// console.log(ten,chi,cung,duoc);

//Bỏ qua phần tử không cần thiết bằng cách để dấu phẩy
const [, user7, user8] = userName;
console.log(user7);
console.log(user8);

//Destructuring với giá trị mặc định
const [user9, user10, user11, user12, user13 = "no name"] = userName;
console.log(user13);
//Destructuring với rest parameter
const [user14, ...abc] = userName;
console.log(user14);
console.log(abc);

//Giả sử chúng ta có 1 object như sau:
const user = {
  name: "Đức",
  age: 22,
  xinchao() {
    return this.name;
  },
};
console.log(user.xinchao());
//Nếu muốn lấy các thuộc tính trong object trên thì ta làm như sau
const ten = user.name;
const tuoi = user.age;
console.log(ten); //Đức
console.log(tuoi); //22

// Nếu muốn sử dụng destructuring thì có vài lưu ý sau
const { name, age } = user;
// Lưu ý : Tên biến phải trùng với tên thuộc tính
console.log(name);
console.log(tuoi);
// nếu sai thuộc tính thì nó sẽ là undefine

// 3.2 Đổi tên biến khi dùng destructuring
const { name: ten1, age: tuoi1 } = user;
console.log(ten1);
console.log(tuoi1);

// 3.3 destructuring với giá trị mặc định
const { name: ten2, age: tuoi2, gioitinh = "Chưa khai báo" } = user;
console.log(gioitinh);

// 3.4 destructuring với rest parameter
const { name: ten3, ...xyz } = user;
console.log(ten3);
console.log(xyz);
