// import Section from './components/SectionWOSyle';  //! без стилізації
import planes from './json/planes.json';
// import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі
import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі
import './App.css'; //! зовнішні стилі

export default function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
