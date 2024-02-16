function Centre() {
  return (
    <div className="container mx-auto mt-[200px]">
      <h1 className="text-center max-[550px]:text-lg md:text-4xl">
        Bizning maqsadimiz - o'quvchilarni IT sohasida professional
        mutaxassislar bo'lishiga yordam berish.
      </h1>

      <h1 className="text-center text-2xl mt-10">Shu kunga qadar </h1>

      <div className="cart flex w-full justify-between mt-[100px] max-[500px]:flex-wrap max-[700px]:gap-y-20 ">
        <div className="shadow-xl box text-center bg-white py-16 px-5 relative rounded-xl">
          <i class="fa-solid fa-users text-4xl text-white absolute left-0 right-0 mx-auto top-[-20%] w-[90px] h-[90px] bg-orange-500 rounded-[50%] flex justify-center items-center"></i>
          <p className="my-4 text-2xl">Umumiy o'quvchilar soni:</p>
          <p className="text-xl font-extrabold">100+</p>
        </div>

        <div className="shadow-xl box text-center bg-white py-16 px-5 relative mx-4 rounded-xl ">
          <i class="fa-solid fa-person-chalkboard text-4xl text-white left-0 right-0 mx-auto top-[-20%] w-[90px] h-[90px] bg-red-500 rounded-[50%] flex justify-center items-center absolute"></i>
          <p className="my-4 text-2xl">Yozilgan darslar davomiyligi:</p>
          <p className="text-xl font-extrabold">61+ soat</p>
        </div>

        <div className="shadow-xl box text-center bg-white py-16 px-5 relative rounded-xl ">
          <i class="fa-solid fa-briefcase text-4xl text-white absolute left-0 right-0 mx-auto top-[-20%] w-[90px] h-[90px] bg-green-500 rounded-[50%] flex justify-center items-center"></i>
          <p className="my-4 text-2xl">O'rtacha jamoaviy tajriba:</p>
          <p className="text-xl font-extrabold">3+ yil</p>
        </div>
      </div>
    </div>
  );
}

export default Centre;
