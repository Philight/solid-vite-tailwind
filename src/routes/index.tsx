import { useParams, useNavigate } from "@solidjs/router";
import * as i18n from "@solid-primitives/i18n";
import * as en from "/src/locales/en";

import { Header, TimedOrdersView } from "~/components";
import NameInput from "~/components/NameInput";

// =================================================================

const dictionaries = {
  en: en,
  // fr: fr.dict,
};

// =================================================================

export default function Home() {
  // const [t] = useI18n()
  const [locale, setLocale] = createSignal<Locale>("en");
  const dict = createMemo(() => i18n.flatten(dictionaries[locale()]));
  const t = i18n.translator(dict);

  const navigate = useNavigate();
  let inputRef: any;

  const go = () => {
    if (inputRef.value) navigate(`/hi/${encodeURIComponent(inputRef.value)}`);
  };

  // =================================================================

  return (
    <div class="layout__c f-center-x">
      <div class="inner__content f-col f-center-y">
        <Header class="testing" />

        {/* PAGE */}
        <main>
          <TimedOrdersView />
        </main>
      </div>
    </div>
  );
}
