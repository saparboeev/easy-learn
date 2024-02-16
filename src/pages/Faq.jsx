import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  return (
    <Accordion className="container mx-auto mt-[300px]">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Kurs bepulmi?</Accordion.Header>
        <Accordion.Body>
          Narxlarni har bir kursning sahifasida ko’rishingiz mumkin.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Kurs noldan boshlab o'rgatiladimi?</Accordion.Header>
        <Accordion.Body>
          Kurslarda o’qish uchun IT va dasturchilik bilim-tajribasi talab
          qilinmaydi, faqat kompyuter savodxonligi kerak xolos. Har bir kursda
          dasturchilik asoslari ham o’rgatiladi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Darslar uchun qancha vaqt ajratish kerak?
        </Accordion.Header>
        <Accordion.Body>
          Har bir dars 1 kun mobaynida o’rganish uchun mo’ljallangan.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
