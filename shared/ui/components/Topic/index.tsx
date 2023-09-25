import styles from '@/shared/styles/Topic.module.scss';

type TopicProps = {
    text: string;
};

const Topic = ({ text }: TopicProps) => <p className={styles.topic}>{text}</p>;

export default Topic;
