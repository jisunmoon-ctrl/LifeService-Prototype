import { useCallback, useState } from "react";
import {
  CrossSellDualAction,
  CrossSellFlowLayout,
  CrossSellSingleAction,
} from "../construction-crosssell/components/CrossSellFlowLayout";
import { CrossSellAddressStep, CrossSellTypeStep } from "../construction-crosssell/components/CrossSellFlowSteps";
import { OdsCalendar, OdsBoxButton, OdsInput } from "../../../shared/ods";
import { MatchingListScreen } from "../construction-crosssell/components/CrossSellResult";
import { EstimateMovingHome } from "./components/EstimateMovingHome";
import { EstimateForm01 } from "./components/EstimateForm01";
import { EstimateBelongingsStep } from "./components/EstimateBelongingsStep";
import { EstimateConfirm, type EstimateEditTarget } from "./components/EstimateConfirm";
import {
  EstimateCrossSellComplete,
  type EstimateCrossSellSelection,
} from "./components/EstimateCrossSellComplete";
import {
  createInitialEstimateData,
  isAddressSectionComplete,
  withMoveDate,
  type EstimateFunnelData,
  type EstimateMoveType,
} from "./components/estimateFunnelTypes";
import type { AppliedServices } from "../construction-crosssell/components/CrossSellResult";
import { BelongingsPhoto, gallerySelectionToMedia, GALLERY_MOCK_PHOTOS, MAX_BELONGINGS_MEDIA } from "../../../shared/belongings/BelongingsPhoto";
import { BelongingsMediaGallery } from "../../../shared/belongings/BelongingsMediaGallery";
import type { BelongingsMediaItem } from "../../../shared/belongings/belongingsTypes";
import {
  buildProductList,
  getDefaultSelectedNames,
} from "../../../shared/belongings/BelongingsManualSelect";
import {
  BelongingsManualDetail,
  buildDetailItemsFromProducts,
  syncDetailItemsWithProducts,
} from "../../../shared/belongings/BelongingsManualDetail";
import type { BelongingsData, BelongingsSubStep } from "../../../shared/belongings/belongingsTypes";

export type EstimateView =
  | "home"
  | "form"
  | "belongings"
  | "belongings_photo"
  | "belongings_manual"
  | "belongings_detail"
  | "confirm"
  | "crosssell"
  | "list";

const DEFAULT_LIST_SERVICES: AppliedServices = {
  construction: false,
  moving: true,
  cleaning: false,
};

function selectionToServices(selection: EstimateCrossSellSelection): AppliedServices {
  return {
    construction: false,
    moving: true,
    cleaning: selection.cleaning,
  };
}

interface Props {
  onNavigate?: (screen: string) => void;
  initialView?: EstimateView;
}

function isFormComplete(data: EstimateFunnelData) {
  return (
    !!data.moveDate &&
    isAddressSectionComplete(data.departure) &&
    isAddressSectionComplete(data.destination) &&
    !!data.moveType
  );
}

function ensureProducts(belongings: BelongingsData): BelongingsData {
  if (belongings.selectedProducts.length > 0) return belongings;
  return {
    ...belongings,
    selectedProducts: buildProductList().map((p) => ({
      ...p,
      selected: getDefaultSelectedNames().includes(p.name),
    })),
    inputMethod: belongings.inputMethod ?? "manual",
  };
}

function viewToBelongingsSubStep(view: EstimateView): BelongingsSubStep {
  if (view === "belongings_photo") return "photo";
  if (view === "belongings_detail") return "manual-detail";
  // belongings / belongings_manual → 목록 기본 화면
  if (view === "belongings" || view === "belongings_manual") return "option";
  return "option";
}

function createPrototypeData(view: EstimateView): EstimateFunnelData {
  const data = createInitialEstimateData(view === "home" ? null : "small");
  if (view === "form") return data;

  const needsPrefill = [
    "belongings",
    "belongings_photo",
    "belongings_manual",
    "belongings_detail",
    "confirm",
    "crosssell",
    "list",
  ].includes(view);

  if (!needsPrefill) return data;

  const moveDate = new Date(2026, 6, 8);
  const products = buildProductList().map((p) => ({
    ...p,
    selected: getDefaultSelectedNames().includes(p.name),
  }));
  const selectedNames = products.filter((p) => p.selected).map((p) => p.name);

  let belongings: BelongingsData = {
    ...data.belongings,
    inputMethod: "manual",
    selectedProducts: products,
    boxCount: 1,
  };

  if (view === "belongings_photo") {
    belongings = { ...belongings, inputMethod: "photo", media: [] };
  } else if (
    view === "belongings_detail" ||
    view === "confirm" ||
    view === "crosssell" ||
    view === "list"
  ) {
    belongings = {
      ...belongings,
      detailItems: buildDetailItemsFromProducts(selectedNames),
      media: [],
    };
  }

  return {
    ...withMoveDate(data, moveDate),
    moveType: data.moveType ?? "small",
    departure: {
      address: "서울 서초구 서초대로74길 4 삼성생명서초타워 25층",
      detailAddress: "서울 서초구 1503호",
      floor: "5층",
      hasElevator: true,
      pyeong: "20평대",
      duplex: false,
    },
    destination: {
      address: "서울 서초구 서초대로74길 4 삼성생명서초타워 25층",
      detailAddress: "",
      floor: "5층",
      hasElevator: true,
      pyeong: "70평대 이상",
      duplex: true,
    },
    belongingsMethod:
      view === "belongings_photo"
        ? "photo"
        : view === "belongings" || view === "belongings_manual"
          ? "manual"
          : "manual",
    belongings,
  };
}

export default function EstimateFunnelFlowScreen({ onNavigate, initialView = "home" }: Props) {
  const [view, setView] = useState<EstimateView>(initialView);
  const [data, setData] = useState<EstimateFunnelData>(() => createPrototypeData(initialView));
  const [editTarget, setEditTarget] = useState<EstimateEditTarget | null>(null);
  const [belongingsSubStep, setBelongingsSubStep] = useState<BelongingsSubStep>(() =>
    viewToBelongingsSubStep(initialView)
  );
  const [listServices, setListServices] = useState<AppliedServices>(DEFAULT_LIST_SERVICES);
  const [crossSellSelection, setCrossSellSelection] = useState<EstimateCrossSellSelection>({
    cleaning: false,
    internet: false,
  });
  const [photoGalleryOpen, setPhotoGalleryOpen] = useState(false);
  const [photoSnackbar, setPhotoSnackbar] = useState<string | null>(null);

  const goToList = (selection?: EstimateCrossSellSelection) => {
    const next = selection ?? crossSellSelection;
    setCrossSellSelection(next);
    setListServices(selectionToServices(next));
    setView("list");
  };

  const update = (patch: Partial<EstimateFunnelData> | EstimateFunnelData) =>
    setData((prev) => ({ ...prev, ...patch }));

  const updateBelongings = useCallback((belongings: BelongingsData) => {
    setData((prev) => ({
      ...prev,
      belongings,
      belongingsMethod: belongings.inputMethod,
    }));
  }, []);

  const startFromHome = (moveType: EstimateMoveType) => {
    setData(createInitialEstimateData(moveType));
    setBelongingsSubStep("option");
    setView("form");
  };

  const goBelongings = () => {
    setData((prev) => ({ ...prev, belongings: ensureProducts(prev.belongings) }));
    setBelongingsSubStep("option");
    setView("belongings");
  };

  /** 이삿짐 목록 → 세부 정보 (선택 항목 기준 sync). 선택 항목 없으면 확인으로 */
  const goBelongingsDetailOrConfirm = () => {
    const belongings = ensureProducts(data.belongings);
    const names = belongings.selectedProducts.filter((p) => p.selected).map((p) => p.name);

    if (names.length === 0) {
      updateBelongings(belongings);
      setView("confirm");
      return;
    }

    updateBelongings({
      ...belongings,
      detailItems: syncDetailItemsWithProducts(names, belongings.detailItems),
      inputMethod: "manual",
    });
    setBelongingsSubStep("manual-detail");
    setView("belongings_detail");
  };

  const startPhoto = () => {
    updateBelongings({
      ...data.belongings,
      inputMethod: "photo",
      skipped: false,
      // 첫 랜딩은 empty (Figma 1931:130661)
      media: data.belongings.media,
    });
    setBelongingsSubStep("photo");
    setView("belongings_photo");
  };

  const handlePhotoAdd = (items: BelongingsMediaItem[]) => {
    updateBelongings({
      ...data.belongings,
      media: [...data.belongings.media, ...items].slice(0, 12),
    });
  };

  const handlePhotoRemove = (id: string) => {
    updateBelongings({
      ...data.belongings,
      media: data.belongings.media.filter((m) => m.id !== id),
    });
  };

  const selectedNames = data.belongings.selectedProducts
    .filter((p) => p.selected)
    .map((p) => p.name);
  const hasMedia = data.belongings.media.some((m) => m.type !== "uploading");
  const canProceedBelongings =
    selectedNames.length > 0 || data.belongings.boxCount > 0 || hasMedia;

  // ── 확인 페이지에서 수정 ──
  if (editTarget) {
    const done = () => setEditTarget(null);
    return (
      <CrossSellFlowLayout
        title="이사 무료 견적 확인"
        leftIcon="back"
        onLeft={done}
        bottom={
          <OdsBoxButton variant="brand-solid" size="extra-large" fullWidth onClick={done}>
            수정 완료
          </OdsBoxButton>
        }
      >
        {editTarget === "contact" && (
          <div className="px-[16px] py-[20px] flex flex-col gap-[16px]">
            <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414]">
              연락처 정보를 알려주세요
            </h2>
            <OdsInput
              title="이름"
              value={data.contact.name}
              onChange={(e) => update({ contact: { ...data.contact, name: e.target.value } })}
              placeholder="이름"
            />
            <OdsInput
              title="휴대폰 번호"
              value={data.contact.phone}
              onChange={(e) => update({ contact: { ...data.contact, phone: e.target.value } })}
              placeholder="010-0000-0000"
            />
          </div>
        )}
        {editTarget === "date" && (
          <div className="px-[16px] py-[20px]">
            <h2 className="text-[20px] font-semibold leading-[28px] tracking-[-0.3px] text-[#141414] mb-[16px]">
              이사 예정일을 알려주세요
            </h2>
            <OdsCalendar
              selectedDate={data.moveDate}
              onSelectDate={(moveDate) => update(withMoveDate(data, moveDate))}
            />
          </div>
        )}
        {editTarget === "departure" && (
          <CrossSellAddressStep
            title="이사 출발지 정보를 알려주세요"
            data={data.departure}
            onUpdate={(departure) => update({ departure })}
          />
        )}
        {editTarget === "destination" && (
          <CrossSellAddressStep
            title="도착지 정보를 알려주세요"
            data={data.destination}
            onUpdate={(destination) => update({ destination })}
          />
        )}
        {editTarget === "type" && (
          <CrossSellTypeStep
            value={data.moveType}
            onSelect={(moveType) => update({ moveType })}
          />
        )}
      </CrossSellFlowLayout>
    );
  }

  if (view === "home") {
    return (
      <EstimateMovingHome
        onStart={startFromHome}
        onBack={() => onNavigate?.("cxs_contact")}
      />
    );
  }

  if (view === "list") {
    return (
      <MatchingListScreen
        services={listServices}
        onBack={() => setView("crosssell")}
      />
    );
  }

  if (view === "crosssell") {
    return (
      <EstimateCrossSellComplete
        initialSelection={crossSellSelection}
        onClose={() => goToList()}
        onViewHistory={goToList}
        onConfirm={goToList}
      />
    );
  }

  if (view === "confirm") {
    return (
      <EstimateConfirm
        data={data}
        onUpdateRequestMemo={(requestMemo) => update({ requestMemo })}
        onEdit={setEditTarget}
        onBack={() => {
          const names = data.belongings.selectedProducts
            .filter((p) => p.selected)
            .map((p) => p.name);
          if (names.length > 0) {
            updateBelongings({
              ...data.belongings,
              detailItems: syncDetailItemsWithProducts(names, data.belongings.detailItems),
            });
            setBelongingsSubStep("manual-detail");
            setView("belongings_detail");
          } else {
            goBelongings();
          }
        }}
        onSubmit={() => setView("crosssell")}
      />
    );
  }

  // ── 이삿짐: 목록 → 세부 정보 → 확인 (사진 옵션은 별도) ──
  if (
    view === "belongings" ||
    view === "belongings_photo" ||
    view === "belongings_manual" ||
    view === "belongings_detail"
  ) {
    if (belongingsSubStep === "photo" || view === "belongings_photo") {
      const mediaCount = data.belongings.media.filter((m) => m.type !== "uploading").length;

      return (
        <CrossSellFlowLayout
          title="이사 무료 견적 받기"
          leftIcon="back"
          onLeft={() => {
            setPhotoGalleryOpen(false);
            goBelongings();
          }}
          progress={0.75}
          bottom={
            <CrossSellDualAction
              prevLabel="이전"
              nextLabel="다음"
              onPrev={() => {
                setPhotoGalleryOpen(false);
                goBelongings();
              }}
              onNext={goBelongingsDetailOrConfirm}
              disabled={!hasMedia}
            />
          }
          overlay={
            <>
              {photoSnackbar && (
                <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 z-[60] max-w-[90%] px-[16px] py-[12px] rounded-[8px] bg-[#2F3438] text-[14px] text-white shadow-lg">
                  {photoSnackbar}
                </div>
              )}
              {photoGalleryOpen && (
                <BelongingsMediaGallery
                  photos={GALLERY_MOCK_PHOTOS}
                  alreadyAttachedCount={mediaCount}
                  maxCount={MAX_BELONGINGS_MEDIA}
                  onClose={() => setPhotoGalleryOpen(false)}
                  onComplete={(selected) => {
                    if (selected.length > 0) {
                      handlePhotoAdd(gallerySelectionToMedia(selected));
                    }
                    setPhotoGalleryOpen(false);
                  }}
                  onMaxReached={() => {
                    setPhotoSnackbar("사진·영상은 최대 12개까지 올릴 수 있어요");
                    window.setTimeout(() => setPhotoSnackbar(null), 2200);
                  }}
                />
              )}
            </>
          }
        >
          <BelongingsPhoto
            media={data.belongings.media}
            onRemove={handlePhotoRemove}
            onOpenGallery={() => setPhotoGalleryOpen(true)}
          />
        </CrossSellFlowLayout>
      );
    }

    if (belongingsSubStep === "manual-detail" || view === "belongings_detail") {
      const detailItems =
        data.belongings.detailItems.length > 0
          ? data.belongings.detailItems
          : buildDetailItemsFromProducts(selectedNames);

      return (
        <CrossSellFlowLayout
          title="이사 무료 견적 받기"
          leftIcon="back"
          onLeft={goBelongings}
          progress={0.75}
          bottom={
            <CrossSellDualAction
              prevLabel="이전"
              nextLabel="다음"
              onPrev={goBelongings}
              onNext={() => setView("confirm")}
              disabled={detailItems.length === 0}
            />
          }
        >
          <BelongingsManualDetail
            items={detailItems}
            onUpdate={(next) => updateBelongings({ ...data.belongings, detailItems: next })}
          />
        </CrossSellFlowLayout>
      );
    }

    // 기본: 주요 짐 목록 + 사진 옵션 (Figma 7942-43864 — 단일 CTA「다음」+ progress 50%)
    return (
      <CrossSellFlowLayout
        title="이사 무료 견적 받기"
        leftIcon="back"
        onLeft={() => setView("form")}
        progress={0.5}
        bottom={
          <CrossSellSingleAction
            label="다음"
            disabled={!canProceedBelongings}
            onClick={goBelongingsDetailOrConfirm}
          />
        }
      >
        <EstimateBelongingsStep
          belongings={ensureProducts(data.belongings)}
          onUpdateBelongings={updateBelongings}
          onOpenPhoto={startPhoto}
        />
      </CrossSellFlowLayout>
    );
  }

  // form
  return (
    <CrossSellFlowLayout
      title="무료 견적 받기"
      leftIcon="back"
      onLeft={() => setView("home")}
      bottom={
        <CrossSellSingleAction
          label="다음"
          disabled={!isFormComplete(data)}
          onClick={goBelongings}
        />
      }
    >
      <EstimateForm01 data={data} onUpdate={update} />
    </CrossSellFlowLayout>
  );
}
