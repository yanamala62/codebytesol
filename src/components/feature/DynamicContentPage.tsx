import PageLayout from '../../layouts/PageLayout';
import { useAppSelector } from '../../store/hooks';

interface DynamicContentPageProps {
  pageId: string;
}

export default function DynamicContentPage({ pageId }: DynamicContentPageProps) {
  const content = useAppSelector((state) => state.content.data);

  const title = content?.hero?.title ?? pageId;
  const description = content?.hero?.description ?? '';

  return (
    <PageLayout title={pageId}>
      <section className="w-full px-6 py-20 max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{description}</p>
      </section>
    </PageLayout>
  );
}

