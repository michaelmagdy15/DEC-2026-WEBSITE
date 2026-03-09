import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import * as defaultContent from '../../content';

type SiteContent = Record<string, any>;

interface SiteContentContextType {
    content: SiteContent;
    loading: boolean;
    refreshContent: () => Promise<void>;
}

export const SiteContentContext = createContext<SiteContentContextType>({
    content: {},
    loading: true,
    refreshContent: async () => { },
});

export const useSiteContent = () => useContext(SiteContentContext);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<SiteContent>({});
    const [loading, setLoading] = useState(true);

    const fetchContent = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.from('site_content').select('*');

            if (error) throw error;

            if (data && data.length > 0) {
                // Convert array of { id, content } to a single lookup object
                const contentMap = data.reduce((acc, item) => {
                    acc[item.id] = item.content;
                    return acc;
                }, {} as SiteContent);
                setContent(contentMap);
            }
        } catch (error) {
            console.error('Error fetching site content:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    return (
        <SiteContentContext.Provider value={{ content, loading, refreshContent: fetchContent }}>
            {children}
        </SiteContentContext.Provider>
    );
};
