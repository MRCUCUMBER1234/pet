import MainContainer from '../shared/ui/layouts/MainLayout';
import Dino from '../entities/dino/ui/Dino';

const Index = () => (
    <MainContainer keywords={['main']} title="Main">
        <Dino />
    </MainContainer>
);

export default Index;
