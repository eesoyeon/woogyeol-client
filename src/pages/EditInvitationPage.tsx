import PageLayout from '@layout/PageLayout';
import HeaderButton from '@common/Header/HeaderButton';
import InvitationTitleInput from '@common/CreateInvitation/InvitationTitleInput';

const EditInvitationPage = () => {
  const handleCancel = () => console.log('취소 버튼 클릭');
  const handleSave = () => console.log('저장 버튼 클릭');

  return (
    <PageLayout
      title="청첩장 수정하기"
      leftButton={
        <HeaderButton
          onClick={handleCancel}
          className="hover:text-pink-400 active:text-pink-600"
        >
          취소
        </HeaderButton>
      }
      rightButton={
        <HeaderButton
          onClick={handleSave}
          className="hover:text-pink-400 active:text-pink-600"
        >
          저장
        </HeaderButton>
      }
    >
      <InvitationTitleInput value="" onChange={() => { }} />
      <p>청첩장 수정하기 페이지</p>
    </PageLayout>
  );
};

export default EditInvitationPage;
