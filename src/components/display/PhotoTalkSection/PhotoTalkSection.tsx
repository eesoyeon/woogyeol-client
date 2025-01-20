import { useEffect, useRef, useState } from 'react';
import usePhotoTalkStore, { PhotoTalk } from '../../../store/usePhotoTalkStore';
import PhotoTalkEditor from './PhotoTalkEditor';
import PhotoTalkCard from './PhotoTalkCard';
import PhotoTalkGallery from './PhotoTalkGallery';
import ImageIcon from '../../icons/ImageIcon';

const PhotoTalkSection = () => {
  const { openEditor, setEditingPhotoTalk } = usePhotoTalkStore();
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedPhotoTalk, setSelectedPhotoTalk] = useState<null | PhotoTalk>(
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    if (selectedPhotoTalk) {
      inputRef.current?.focus();
    }
  }, [selectedPhotoTalk]);

  const confirmPassword = () => {
    if (selectedPhotoTalk?.password === passwordInput) {
      setEditingPhotoTalk(selectedPhotoTalk);
      openEditor();
      setPasswordInput('');
      setSelectedPhotoTalk(null);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') confirmPassword();
  };

  return (
    <div className="w-full">
      <div className="column-center w-full">
        <div className="sub-title">PHOTO TALK</div>
        <div className="title">포토톡</div>
        <div className="text-sm font-light p-4 mb-4">어쩌고 설명</div>
        <button onClick={openEditor} className="select-btn">
          작성하기
        </button>
      </div>
      <div>
        <button
          onClick={() => setGalleryOpen(!isGalleryOpen)}
          className="w-full flex justify-end px-8"
        >
          {isGalleryOpen ? (
            <div className="border border-gray-300 hover:bg-gray-300 hover:text-white focus:ring-4 rounded-lg p-2.5 text-center inline-flex items-center">
              <ImageIcon />
            </div>
          ) : (
            <div className="border border-gray-300 hover:bg-gray-300 hover:text-white focus:ring-4 rounded-lg p-2.5 text-center inline-flex items-center">
              <ImageIcon />
            </div>
          )}
        </button>
        {isGalleryOpen && (
          <div className="w-full p-4">
            <h2 className="text-lg font-semibold mb-4">이미지 갤러리</h2>
            <PhotoTalkGallery />
          </div>
        )}
      </div>
      <PhotoTalkEditor />
      <PhotoTalkCard onEdit={setSelectedPhotoTalk} />
      {selectedPhotoTalk && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">비밀번호 확인</h2>
            <input
              type="password"
              ref={inputRef}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="formInput w-full mb-4"
              onKeyDown={handleKeyDown}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedPhotoTalk(null)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                취소
              </button>
              <button
                onClick={confirmPassword}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoTalkSection;
