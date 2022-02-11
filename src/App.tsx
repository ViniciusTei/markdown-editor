import Editor from './components/Editor';
import Header from './components/Header';
import Visuzalizer from './components/Visualizer';
import MarkdownProvider from './hooks/useMarkdown';
import './styles/App.css';

function App() {
  return (
    <MarkdownProvider>
      <div className="App_Container">
        <Header />
        <main className="App">
          <div>
            <Editor/>

          </div>
          <div>
            <Visuzalizer />
          </div>
        </main>
      </div>
    </MarkdownProvider>
  );
}

export default App;
