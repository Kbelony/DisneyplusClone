import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import playiconwhite from "/assets/images/play-icon-white.png";
import playiconblack from "/assets/images/play-icon-black.png";
import groupicon from "/assets/images/group-icon.png";

const Detail = () => {
  interface DetailData {
    backgroundImg?: string;
    title?: string;
    titleImg?: string;
    subTitle?: string;
    description?: string;
    // Ajoutez ici d'autres propriétés attendues
  }
  const { id } = useParams();
  const [detailData, setDetailData] = useState<DetailData>({});

  useEffect(() => {
    if (id) {
      const docRef = doc(db, "movies", id);

      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setDetailData(docSnap.data());
          } else {
            console.log("no such document in firebase 🔥");
          }
        })
        .catch((error) => {
          console.log("Erreur lors de la récupération du document :", error);
        });
    } else {
      console.log("id is undefined");
    }
  }, [id]);
  return (
    <div className="detail-component">
      <div className="container mt-8 grid gap-6">
        <div className="background">
          <img src={detailData.backgroundImg} alt={detailData.title} />
          <div className="shadow"></div>
        </div>
        <div className="img-title">
          <img alt={detailData.title} src={detailData.titleImg} />
        </div>
        <div className="content-meta">
          <div className="controls">
            <div className="player">
              <img src={playiconblack} alt="" />
              <span>Lecture</span>
            </div>
            <div className="trailer">
              <img src={playiconwhite} alt="" />
              <span>Trailer</span>
            </div>
            <div className="add-lists">
              <span></span>
              <span></span>
            </div>
            <div className="groupwatch">
              <div>
                <img src={groupicon} alt="" />
              </div>
            </div>
          </div>
          <div className="subtitles">{detailData.subTitle}</div>
          <div className="description">{detailData.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
