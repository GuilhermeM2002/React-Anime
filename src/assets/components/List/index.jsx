import "./List.css";

import * as Accordion from "@radix-ui/react-accordion";

export const List = () => {
  return (
    <aside>
      <Accordion.Root className="accordion" type="single" collapsible>
        <Accordion.Item className="accordionItem" value="item1">
          <Accordion.Header className="accordionHeader">
            <Accordion.Trigger className="accordionTitle">
              Shonen
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordionContent">
            Este tipo de anime é direcionado ao público masculino jovem, entre
            os 12 e 18 anos de idade. Esta é considerada a classificação mais
            popular de animes e mangás. A história dos animes shounen costuma
            ser focada no desenvolvimento e jornada do herói, que neste caso é
            do gênero masculino.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordionItem" value="item2">
          <Accordion.Header className="accordionHeader">
            <Accordion.Trigger className="accordionTitle">
              Shoujo
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordionContent">
            Os animes Shoujo também são direcionados para o público jovem, mas
            principalmente do gênero feminino. A trama das séries costuma
            apresentar uma menina como protagonista, sendo as histórias mais
            focadas em dramas, romances e demais eventos que marcam o
            desenvolvimento da mulher.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordionItem" value="item3">
          <Accordion.Header className="accordionHeader">
            <Accordion.Trigger className="accordionTitle">
              Sheinen
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordionContent">
            Esses animes são feitos para um público mais maduro, normalmente
            entre os 18 e 40 anos. Os Seinens são destinados ao gênero
            masculino, contendo temas complexos e que não seriam apropriados
            para os mais jovens.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordionItem" value="item4">
          <Accordion.Header className="accordionHeader">
            <Accordion.Trigger className="accordionTitle">
              Josei
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordionContent">
            Assim como o Seinen, este tipo de anime é feito para um público
            adulto, mas do gênero feminino. Em suma, o Josei representa o
            amadurecimento do Shoujo, apresentando questões comuns do cotidiano
            das mulheres a partir de um ponto de vista realista.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </aside>
  );
};
